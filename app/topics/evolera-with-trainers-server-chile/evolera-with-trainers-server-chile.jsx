import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-with-trainers-server-chile');
}

export default function EvoleraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="evolera-with-trainers-server-chile" />;
}
