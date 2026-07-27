import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-evo-server-brazil');
}

export default function TibiaretroEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-evo-server-brazil" />;
}
