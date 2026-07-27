import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-canada');
}

export default function CarlinotWithTrainersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-canada" />;
}
