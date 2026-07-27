import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-pvp-enforced-server');
}

export default function Tibiaretro12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-pvp-enforced-server" />;
}
