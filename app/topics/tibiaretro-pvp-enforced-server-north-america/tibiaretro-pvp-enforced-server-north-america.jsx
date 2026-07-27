import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-north-america');
}

export default function TibiaretroPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-north-america" />;
}
