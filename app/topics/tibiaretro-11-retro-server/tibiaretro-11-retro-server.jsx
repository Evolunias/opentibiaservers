import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-retro-server');
}

export default function Tibiaretro11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-retro-server" />;
}
