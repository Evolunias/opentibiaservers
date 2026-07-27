import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-pvp-server');
}

export default function Tibiaretro854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-pvp-server" />;
}
