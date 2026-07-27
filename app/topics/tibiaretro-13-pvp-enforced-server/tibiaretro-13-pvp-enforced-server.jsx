import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-pvp-enforced-server');
}

export default function Tibiaretro13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-pvp-enforced-server" />;
}
