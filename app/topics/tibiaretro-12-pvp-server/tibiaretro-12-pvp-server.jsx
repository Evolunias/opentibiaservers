import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-pvp-server');
}

export default function Tibiaretro12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-pvp-server" />;
}
