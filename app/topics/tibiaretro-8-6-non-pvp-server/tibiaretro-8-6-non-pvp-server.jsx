import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-non-pvp-server');
}

export default function Tibiaretro86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-non-pvp-server" />;
}
