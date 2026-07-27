import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-south-america');
}

export default function TibiaretroPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-south-america" />;
}
