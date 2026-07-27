import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-germany');
}

export default function CarlinotNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-germany" />;
}
