import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-pvp-server');
}

export default function Tibiaretro100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-pvp-server" />;
}
