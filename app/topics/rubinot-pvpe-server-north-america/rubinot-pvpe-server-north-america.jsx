import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvpe-server-north-america');
}

export default function RubinotPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvpe-server-north-america" />;
}
