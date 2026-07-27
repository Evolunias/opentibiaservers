import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-retro-server');
}

export default function Tibiaretro15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-retro-server" />;
}
