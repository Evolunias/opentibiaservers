import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-france');
}

export default function MarolaotWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-france" />;
}
