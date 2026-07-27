import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-high-exp-server-poland');
}

export default function CarlinotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-high-exp-server-poland" />;
}
