import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-trainers-server-germany');
}

export default function MarolaotWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-trainers-server-germany" />;
}
