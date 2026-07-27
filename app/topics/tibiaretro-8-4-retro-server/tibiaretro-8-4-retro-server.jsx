import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-retro-server');
}

export default function Tibiaretro84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-retro-server" />;
}
