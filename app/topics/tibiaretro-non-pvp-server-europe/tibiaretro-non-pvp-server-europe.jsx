import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-europe');
}

export default function TibiaretroNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-europe" />;
}
