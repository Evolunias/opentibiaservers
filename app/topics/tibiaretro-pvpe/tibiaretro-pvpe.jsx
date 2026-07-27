import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe');
}

export default function TibiaretroPvpeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe" />;
}
