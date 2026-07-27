import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-retro-server');
}

export default function Tibiaretro12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-retro-server" />;
}
