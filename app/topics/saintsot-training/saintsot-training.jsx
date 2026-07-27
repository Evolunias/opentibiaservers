import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-training');
}

export default function SaintsotTrainingKeywordPage() {
  return <StaticKeywordPage slug="saintsot-training" />;
}
