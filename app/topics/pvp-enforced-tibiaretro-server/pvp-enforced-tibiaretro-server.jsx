import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibiaretro-server');
}

export default function PvpEnforcedTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibiaretro-server" />;
}
