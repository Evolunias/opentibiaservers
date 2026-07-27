import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-retro-server');
}

export default function Tibiaretro100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-retro-server" />;
}
