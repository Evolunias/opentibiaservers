import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-non-pvp-server');
}

export default function Tibiaretro14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-non-pvp-server" />;
}
