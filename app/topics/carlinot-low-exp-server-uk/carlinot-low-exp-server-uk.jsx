import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-uk');
}

export default function CarlinotLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-uk" />;
}
