import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-north-america');
}

export default function MarolaotWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-north-america" />;
}
