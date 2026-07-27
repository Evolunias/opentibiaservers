import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-mexico');
}

export default function CarlinotWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-mexico" />;
}
