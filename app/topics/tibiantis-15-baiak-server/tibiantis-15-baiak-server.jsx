import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-baiak-server');
}

export default function Tibiantis15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-baiak-server" />;
}
