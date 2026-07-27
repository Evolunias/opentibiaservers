import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-trainers-server-chile');
}

export default function RealeraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="realera-with-trainers-server-chile" />;
}
