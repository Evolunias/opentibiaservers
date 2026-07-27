import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-retro-server');
}

export default function Tibiaretro772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-retro-server" />;
}
