import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-retro-server-chile');
}

export default function TibiaretroRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-retro-server-chile" />;
}
