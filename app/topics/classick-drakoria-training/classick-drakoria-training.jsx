import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-training');
}

export default function ClassickDrakoriaTrainingKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-training" />;
}
