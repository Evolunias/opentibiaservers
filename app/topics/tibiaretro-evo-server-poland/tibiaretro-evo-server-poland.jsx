import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-poland');
}

export default function TibiaretroEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-poland" />;
}
