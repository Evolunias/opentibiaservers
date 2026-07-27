import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-usa');
}

export default function TibiaretroNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-usa" />;
}
