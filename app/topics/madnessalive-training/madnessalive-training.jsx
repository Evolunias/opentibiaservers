import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-training');
}

export default function MadnessaliveTrainingKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-training" />;
}
