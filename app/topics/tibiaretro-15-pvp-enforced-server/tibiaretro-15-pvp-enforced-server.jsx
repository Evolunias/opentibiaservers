import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-pvp-enforced-server');
}

export default function Tibiaretro15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-pvp-enforced-server" />;
}
