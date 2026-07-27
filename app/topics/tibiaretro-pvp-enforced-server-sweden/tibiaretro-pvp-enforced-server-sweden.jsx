import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-sweden');
}

export default function TibiaretroPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-sweden" />;
}
