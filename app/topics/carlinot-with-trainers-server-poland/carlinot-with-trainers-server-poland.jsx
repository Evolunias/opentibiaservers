import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-poland');
}

export default function CarlinotWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-poland" />;
}
