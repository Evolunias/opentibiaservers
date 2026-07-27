import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-non-pvp-server-poland');
}

export default function CarlinotNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-non-pvp-server-poland" />;
}
