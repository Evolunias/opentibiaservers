import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-poland');
}

export default function TibiaretroPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-poland" />;
}
