import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-chile');
}

export default function TibiaretroNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-chile" />;
}
