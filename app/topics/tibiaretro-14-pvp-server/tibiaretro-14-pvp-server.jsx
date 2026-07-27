import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-pvp-server');
}

export default function Tibiaretro14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-pvp-server" />;
}
