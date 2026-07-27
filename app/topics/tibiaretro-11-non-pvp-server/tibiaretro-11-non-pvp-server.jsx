import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-non-pvp-server');
}

export default function Tibiaretro11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-non-pvp-server" />;
}
