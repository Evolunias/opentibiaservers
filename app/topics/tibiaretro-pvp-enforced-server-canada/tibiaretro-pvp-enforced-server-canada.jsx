import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-canada');
}

export default function TibiaretroPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-canada" />;
}
