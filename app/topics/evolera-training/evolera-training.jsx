import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-training');
}

export default function EvoleraTrainingKeywordPage() {
  return <StaticKeywordPage slug="evolera-training" />;
}
