import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-non-pvp-server-north-america');
}

export default function RubinotNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-non-pvp-server-north-america" />;
}
