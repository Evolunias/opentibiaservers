import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-non-pvp-server-sweden');
}

export default function TibiaretroNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-non-pvp-server-sweden" />;
}
