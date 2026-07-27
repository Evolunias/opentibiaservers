import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-north-america');
}

export default function RubinotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-north-america" />;
}
