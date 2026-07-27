import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-germany');
}

export default function TibiaretroNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-germany" />;
}
