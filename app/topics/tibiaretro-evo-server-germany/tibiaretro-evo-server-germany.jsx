import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-germany');
}

export default function TibiaretroEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-germany" />;
}
