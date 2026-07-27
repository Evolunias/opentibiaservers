import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-1-baiak-server');
}

export default function Tibiantis71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-1-baiak-server" />;
}
