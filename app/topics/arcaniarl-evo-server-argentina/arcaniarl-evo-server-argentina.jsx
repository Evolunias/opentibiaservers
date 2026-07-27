import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-argentina');
}

export default function ArcaniarlEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-argentina" />;
}
