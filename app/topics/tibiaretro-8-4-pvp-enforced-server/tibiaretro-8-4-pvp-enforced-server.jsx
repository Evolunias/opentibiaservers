import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-pvp-enforced-server');
}

export default function Tibiaretro84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-pvp-enforced-server" />;
}
