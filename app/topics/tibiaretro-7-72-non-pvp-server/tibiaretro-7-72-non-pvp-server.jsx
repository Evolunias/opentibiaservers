import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-non-pvp-server');
}

export default function Tibiaretro772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-non-pvp-server" />;
}
