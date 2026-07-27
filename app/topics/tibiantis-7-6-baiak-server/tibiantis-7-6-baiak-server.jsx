import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-baiak-server');
}

export default function Tibiantis76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-baiak-server" />;
}
