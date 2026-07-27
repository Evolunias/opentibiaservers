import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-pvp-server');
}

export default function Tibiaretro13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-pvp-server" />;
}
