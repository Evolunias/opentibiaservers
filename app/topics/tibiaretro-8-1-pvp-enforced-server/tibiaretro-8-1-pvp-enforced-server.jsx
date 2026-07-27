import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-pvp-enforced-server');
}

export default function Tibiaretro81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-pvp-enforced-server" />;
}
