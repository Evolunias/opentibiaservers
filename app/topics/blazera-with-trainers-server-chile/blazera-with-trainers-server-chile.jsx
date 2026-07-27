import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-with-trainers-server-chile');
}

export default function BlazeraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-with-trainers-server-chile" />;
}
