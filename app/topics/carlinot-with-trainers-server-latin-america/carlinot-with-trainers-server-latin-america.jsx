import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-latin-america');
}

export default function CarlinotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-latin-america" />;
}
