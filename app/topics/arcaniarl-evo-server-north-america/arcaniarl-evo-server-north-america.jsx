import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-north-america');
}

export default function ArcaniarlEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-north-america" />;
}
