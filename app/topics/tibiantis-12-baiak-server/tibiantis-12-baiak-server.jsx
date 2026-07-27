import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-baiak-server');
}

export default function Tibiantis12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-baiak-server" />;
}
