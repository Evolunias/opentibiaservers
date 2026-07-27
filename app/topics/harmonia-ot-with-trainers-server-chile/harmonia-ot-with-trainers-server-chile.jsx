import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-trainers-server-chile');
}

export default function HarmoniaOtWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-trainers-server-chile" />;
}
