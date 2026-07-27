import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-trainers-server-chile');
}

export default function TibiameWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-trainers-server-chile" />;
}
