import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-canada');
}

export default function TibiaretroEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-canada" />;
}
