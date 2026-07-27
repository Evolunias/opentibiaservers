import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-poland');
}

export default function CarlinotFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-poland" />;
}
