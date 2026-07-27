import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-chile');
}

export default function TibiaretroEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-chile" />;
}
