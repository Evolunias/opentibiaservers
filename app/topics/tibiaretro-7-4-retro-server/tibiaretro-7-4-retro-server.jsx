import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-retro-server');
}

export default function Tibiaretro74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-retro-server" />;
}
