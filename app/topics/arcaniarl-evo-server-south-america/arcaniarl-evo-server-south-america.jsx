import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-south-america');
}

export default function ArcaniarlEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-south-america" />;
}
