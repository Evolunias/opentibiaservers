import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-trainers-server-chile');
}

export default function NepreniaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-trainers-server-chile" />;
}
