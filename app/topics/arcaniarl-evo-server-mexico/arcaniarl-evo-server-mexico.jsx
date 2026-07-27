import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-mexico');
}

export default function ArcaniarlEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-mexico" />;
}
