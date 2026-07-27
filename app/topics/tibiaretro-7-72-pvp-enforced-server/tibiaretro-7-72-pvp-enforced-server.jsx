import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-pvp-enforced-server');
}

export default function Tibiaretro772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-pvp-enforced-server" />;
}
