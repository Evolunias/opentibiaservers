import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-uk');
}

export default function CarlinotWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-uk" />;
}
