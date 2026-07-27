import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-brazil');
}

export default function TibiaretroPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-brazil" />;
}
