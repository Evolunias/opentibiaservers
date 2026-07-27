import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-trainers-server-chile');
}

export default function KasteriaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-trainers-server-chile" />;
}
