import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-south-america');
}

export default function CarlinotPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-south-america" />;
}
