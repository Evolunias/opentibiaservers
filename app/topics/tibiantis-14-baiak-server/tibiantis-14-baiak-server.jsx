import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-baiak-server');
}

export default function Tibiantis14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-baiak-server" />;
}
