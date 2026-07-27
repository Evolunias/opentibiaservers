import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-training');
}

export default function ClassicusTrainingKeywordPage() {
  return <StaticKeywordPage slug="classicus-training" />;
}
