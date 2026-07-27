import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-servers-brazil');
}

export default function ArcaniarlEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-servers-brazil" />;
}
