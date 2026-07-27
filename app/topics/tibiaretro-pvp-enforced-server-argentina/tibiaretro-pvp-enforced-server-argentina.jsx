import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-argentina');
}

export default function TibiaretroPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-argentina" />;
}
