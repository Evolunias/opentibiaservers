import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-latin-america');
}

export default function MarolaotWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-latin-america" />;
}
