import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-europe');
}

export default function TibiaretroPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-europe" />;
}
