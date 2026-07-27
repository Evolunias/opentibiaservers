import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-server-poland');
}

export default function CarlinotPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-server-poland" />;
}
