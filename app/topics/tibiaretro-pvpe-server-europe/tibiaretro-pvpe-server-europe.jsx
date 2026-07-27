import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvpe-server-europe');
}

export default function TibiaretroPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvpe-server-europe" />;
}
