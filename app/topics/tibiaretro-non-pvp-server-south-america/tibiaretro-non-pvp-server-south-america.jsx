import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-south-america');
}

export default function TibiaretroNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-south-america" />;
}
