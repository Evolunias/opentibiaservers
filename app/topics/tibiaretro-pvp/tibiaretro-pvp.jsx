import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp');
}

export default function TibiaretroPvpKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp" />;
}
