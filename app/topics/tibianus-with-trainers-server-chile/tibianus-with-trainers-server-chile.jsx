import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-with-trainers-server-chile');
}

export default function TibianusWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-with-trainers-server-chile" />;
}
