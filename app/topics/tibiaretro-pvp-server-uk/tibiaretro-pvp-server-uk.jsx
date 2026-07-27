import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-uk');
}

export default function TibiaretroPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-uk" />;
}
