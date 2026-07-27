import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-pvp-enforced-server');
}

export default function Tibiaretro96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-pvp-enforced-server" />;
}
