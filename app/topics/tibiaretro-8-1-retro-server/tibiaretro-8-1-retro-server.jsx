import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-retro-server');
}

export default function Tibiaretro81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-retro-server" />;
}
