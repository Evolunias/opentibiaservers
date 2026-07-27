import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-training');
}

export default function MarolaotTrainingKeywordPage() {
  return <StaticKeywordPage slug="marolaot-training" />;
}
