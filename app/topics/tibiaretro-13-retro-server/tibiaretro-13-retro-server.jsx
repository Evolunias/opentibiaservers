import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-retro-server');
}

export default function Tibiaretro13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-retro-server" />;
}
