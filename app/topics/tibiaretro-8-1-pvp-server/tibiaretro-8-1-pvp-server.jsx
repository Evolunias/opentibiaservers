import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-pvp-server');
}

export default function Tibiaretro81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-pvp-server" />;
}
