import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-training');
}

export default function ThaisotTrainingKeywordPage() {
  return <StaticKeywordPage slug="thaisot-training" />;
}
