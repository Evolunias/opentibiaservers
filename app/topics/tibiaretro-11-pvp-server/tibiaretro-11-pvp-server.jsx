import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-pvp-server');
}

export default function Tibiaretro11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-pvp-server" />;
}
