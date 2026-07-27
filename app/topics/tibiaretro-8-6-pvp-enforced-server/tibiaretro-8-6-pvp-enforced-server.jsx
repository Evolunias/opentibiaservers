import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-pvp-enforced-server');
}

export default function Tibiaretro86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-pvp-enforced-server" />;
}
