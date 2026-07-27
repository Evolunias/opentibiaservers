import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-chile');
}

export default function TibiaretroPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-chile" />;
}
