import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-baiak-server');
}

export default function Tibiantis74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-baiak-server" />;
}
