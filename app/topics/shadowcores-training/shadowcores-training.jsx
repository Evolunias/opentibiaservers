import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-training');
}

export default function ShadowcoresTrainingKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-training" />;
}
