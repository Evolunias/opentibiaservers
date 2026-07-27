import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-uk');
}

export default function TibiaretroNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-uk" />;
}
