import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-baiak-server');
}

export default function Tibiantis96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-baiak-server" />;
}
