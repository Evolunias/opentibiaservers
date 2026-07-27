import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-south-america');
}

export default function TibiaretroPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-south-america" />;
}
