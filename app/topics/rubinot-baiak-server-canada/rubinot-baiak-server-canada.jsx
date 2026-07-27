import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-canada');
}

export default function RubinotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-canada" />;
}
