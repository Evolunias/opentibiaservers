import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-training');
}

export default function RealestaTrainingKeywordPage() {
  return <StaticKeywordPage slug="realesta-training" />;
}
