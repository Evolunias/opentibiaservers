import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-4-baiak-server');
}

export default function Tibiantis84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-4-baiak-server" />;
}
