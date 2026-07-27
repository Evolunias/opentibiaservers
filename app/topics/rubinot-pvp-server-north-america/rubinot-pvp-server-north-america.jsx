import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-server-north-america');
}

export default function RubinotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-server-north-america" />;
}
