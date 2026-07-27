import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-retro-server');
}

export default function Tibiaretro86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-retro-server" />;
}
