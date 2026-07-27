import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-trainers-server-chile');
}

export default function CarlinotWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-trainers-server-chile" />;
}
