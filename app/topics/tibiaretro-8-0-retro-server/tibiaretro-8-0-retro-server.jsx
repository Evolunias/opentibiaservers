import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-retro-server');
}

export default function Tibiaretro80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-retro-server" />;
}
