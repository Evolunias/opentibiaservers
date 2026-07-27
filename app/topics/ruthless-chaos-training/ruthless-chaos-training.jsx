import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-training');
}

export default function RuthlessChaosTrainingKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-training" />;
}
