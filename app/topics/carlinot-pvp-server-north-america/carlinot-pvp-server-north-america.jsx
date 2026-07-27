import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-north-america');
}

export default function CarlinotPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-north-america" />;
}
