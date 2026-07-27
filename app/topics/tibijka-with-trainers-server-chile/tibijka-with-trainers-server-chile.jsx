import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-trainers-server-chile');
}

export default function TibijkaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-trainers-server-chile" />;
}
