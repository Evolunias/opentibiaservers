import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-canada');
}

export default function TibiaretroNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-canada" />;
}
