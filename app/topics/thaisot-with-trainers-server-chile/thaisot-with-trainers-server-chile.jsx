import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-trainers-server-chile');
}

export default function ThaisotWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-trainers-server-chile" />;
}
