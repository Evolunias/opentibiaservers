import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-canada');
}

export default function ArcaniarlEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-canada" />;
}
