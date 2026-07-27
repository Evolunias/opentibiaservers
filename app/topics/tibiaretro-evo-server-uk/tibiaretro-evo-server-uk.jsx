import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-uk');
}

export default function TibiaretroEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-uk" />;
}
