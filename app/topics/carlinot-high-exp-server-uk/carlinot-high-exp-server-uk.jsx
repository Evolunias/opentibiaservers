import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-uk');
}

export default function CarlinotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-uk" />;
}
