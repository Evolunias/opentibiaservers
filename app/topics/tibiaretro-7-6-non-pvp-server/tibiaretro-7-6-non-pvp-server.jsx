import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-non-pvp-server');
}

export default function Tibiaretro76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-non-pvp-server" />;
}
