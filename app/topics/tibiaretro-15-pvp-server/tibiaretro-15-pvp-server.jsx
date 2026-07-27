import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-pvp-server');
}

export default function Tibiaretro15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-pvp-server" />;
}
