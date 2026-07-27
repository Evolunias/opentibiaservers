import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-trainers-server-chile');
}

export default function TibiaretroWithTrainersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-trainers-server-chile" />;
}
