import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-retro-server');
}

export default function Tibiaretro76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-retro-server" />;
}
