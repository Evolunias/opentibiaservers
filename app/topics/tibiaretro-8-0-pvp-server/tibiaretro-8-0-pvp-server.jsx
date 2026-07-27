import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-pvp-server');
}

export default function Tibiaretro80PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-pvp-server" />;
}
