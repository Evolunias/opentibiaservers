import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-pvp-enforced-server');
}

export default function Tibiaretro854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-pvp-enforced-server" />;
}
