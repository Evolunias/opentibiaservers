import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-south-america');
}

export default function TibiaretroPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-south-america" />;
}
