import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-usa');
}

export default function CarlinotWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-usa" />;
}
