import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-low-exp-server-poland');
}

export default function CarlinotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-low-exp-server-poland" />;
}
