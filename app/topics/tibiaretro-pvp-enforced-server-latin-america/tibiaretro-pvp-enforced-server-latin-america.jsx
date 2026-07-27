import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-pvp-enforced-server-latin-america');
}

export default function TibiaretroPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-pvp-enforced-server-latin-america" />;
}
