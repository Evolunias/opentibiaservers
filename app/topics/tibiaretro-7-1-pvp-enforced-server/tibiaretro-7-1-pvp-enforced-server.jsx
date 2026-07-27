import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-pvp-enforced-server');
}

export default function Tibiaretro71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-pvp-enforced-server" />;
}
