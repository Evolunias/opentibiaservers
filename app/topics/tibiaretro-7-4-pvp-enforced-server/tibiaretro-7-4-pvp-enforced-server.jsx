import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-pvp-enforced-server');
}

export default function Tibiaretro74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-pvp-enforced-server" />;
}
