import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-north-america');
}

export default function TibiaretroEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-north-america" />;
}
