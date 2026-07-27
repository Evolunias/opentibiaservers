import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-latin-america');
}

export default function TibiaretroNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-latin-america" />;
}
