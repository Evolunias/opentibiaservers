import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-with-trainers-server-chile');
}

export default function RubinotWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-with-trainers-server-chile" />;
}
