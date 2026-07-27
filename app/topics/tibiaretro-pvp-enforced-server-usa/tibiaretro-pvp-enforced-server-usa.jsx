import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-usa');
}

export default function TibiaretroPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-usa" />;
}
