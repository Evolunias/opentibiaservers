import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-trainers-server-chile');
}

export default function MediviaWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-trainers-server-chile" />;
}
