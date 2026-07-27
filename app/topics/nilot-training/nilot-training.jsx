import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-training');
}

export default function NilotTrainingKeywordPage() {
  return <StaticKeywordPage slug="nilot-training" />;
}
