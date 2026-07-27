import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-mexico');
}

export default function TibiaretroNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-mexico" />;
}
