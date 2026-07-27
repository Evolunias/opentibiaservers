import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-retro-server');
}

export default function Tibiaretro96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-retro-server" />;
}
