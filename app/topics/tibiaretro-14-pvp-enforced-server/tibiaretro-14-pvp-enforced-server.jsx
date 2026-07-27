import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-pvp-enforced-server');
}

export default function Tibiaretro14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-pvp-enforced-server" />;
}
