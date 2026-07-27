import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-non-pvp-server');
}

export default function Tibiaretro71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-non-pvp-server" />;
}
