import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-usa');
}

export default function ArcaniarlEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-usa" />;
}
