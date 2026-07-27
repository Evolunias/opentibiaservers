import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-trainers-server-chile');
}

export default function TibiascapeWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-trainers-server-chile" />;
}
