import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-training');
}

export default function MidhemTrainingKeywordPage() {
  return <StaticKeywordPage slug="midhem-training" />;
}
