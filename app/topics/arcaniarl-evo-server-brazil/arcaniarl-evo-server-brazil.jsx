import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-brazil');
}

export default function ArcaniarlEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-brazil" />;
}
