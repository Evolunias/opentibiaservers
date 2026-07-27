import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-server-poland');
}

export default function TibiaretroPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-server-poland" />;
}
