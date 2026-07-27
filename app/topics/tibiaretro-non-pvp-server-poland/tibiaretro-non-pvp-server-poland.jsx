import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-poland');
}

export default function TibiaretroNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-poland" />;
}
