import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-training');
}

export default function CanobTrainingKeywordPage() {
  return <StaticKeywordPage slug="canob-training" />;
}
