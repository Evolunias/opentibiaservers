import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-evo-server-france');
}

export default function ArcaniarlEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-evo-server-france" />;
}
