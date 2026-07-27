import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-south-america');
}

export default function CarlinotNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-south-america" />;
}
