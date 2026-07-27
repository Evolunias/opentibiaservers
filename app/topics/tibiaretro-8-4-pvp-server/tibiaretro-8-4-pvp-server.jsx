import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-pvp-server');
}

export default function Tibiaretro84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-pvp-server" />;
}
