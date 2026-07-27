import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-non-pvp-server');
}

export default function Tibiaretro100NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-non-pvp-server" />;
}
