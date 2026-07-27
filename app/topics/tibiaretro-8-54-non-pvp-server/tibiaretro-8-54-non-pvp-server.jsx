import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-54-non-pvp-server');
}

export default function Tibiaretro854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-54-non-pvp-server" />;
}
