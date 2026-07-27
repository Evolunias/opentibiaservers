import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-non-pvp-server');
}

export default function Tibiaretro12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-non-pvp-server" />;
}
