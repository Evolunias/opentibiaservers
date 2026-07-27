import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-germany');
}

export default function TibiaretroPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-germany" />;
}
