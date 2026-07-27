import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-sweden');
}

export default function ArcaniarlEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-sweden" />;
}
