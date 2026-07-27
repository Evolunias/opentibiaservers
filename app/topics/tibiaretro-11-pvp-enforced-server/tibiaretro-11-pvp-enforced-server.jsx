import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-pvp-enforced-server');
}

export default function Tibiaretro11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-pvp-enforced-server" />;
}
