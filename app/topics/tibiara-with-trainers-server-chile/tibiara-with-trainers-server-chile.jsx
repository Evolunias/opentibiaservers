import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-trainers-server-chile');
}

export default function TibiaraWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-trainers-server-chile" />;
}
