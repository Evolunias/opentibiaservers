import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-tibiaretro-server');
}

export default function PvpTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-tibiaretro-server" />;
}
