import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-mexico');
}

export default function TibiaretroPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-mexico" />;
}
