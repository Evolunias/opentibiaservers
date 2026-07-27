import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-trainers-server-chile');
}

export default function MidhemWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-trainers-server-chile" />;
}
