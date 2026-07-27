import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-training');
}

export default function UnlineTrainingKeywordPage() {
  return <StaticKeywordPage slug="unline-training" />;
}
