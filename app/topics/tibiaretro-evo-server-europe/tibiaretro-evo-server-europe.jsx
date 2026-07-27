import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-europe');
}

export default function TibiaretroEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-europe" />;
}
