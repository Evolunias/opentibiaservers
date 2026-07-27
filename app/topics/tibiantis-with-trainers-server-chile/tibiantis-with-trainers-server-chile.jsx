import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-with-trainers-server-chile');
}

export default function TibiantisWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-with-trainers-server-chile" />;
}
