import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-retro-server');
}

export default function Tibiaretro14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-retro-server" />;
}
