import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-france');
}

export default function TibiaretroPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-france" />;
}
