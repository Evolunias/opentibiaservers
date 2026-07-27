import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-germany');
}

export default function CarlinotPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-germany" />;
}
