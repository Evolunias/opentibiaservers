import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-france');
}

export default function CarlinotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-france" />;
}
