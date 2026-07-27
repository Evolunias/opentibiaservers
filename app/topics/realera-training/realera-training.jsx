import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-training');
}

export default function RealeraTrainingKeywordPage() {
  return <StaticKeywordPage slug="realera-training" />;
}
