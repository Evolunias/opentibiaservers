import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-chile');
}

export default function TibiaretroPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-chile" />;
}
