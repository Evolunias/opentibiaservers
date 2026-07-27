import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-mexico');
}

export default function RubinotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-mexico" />;
}
