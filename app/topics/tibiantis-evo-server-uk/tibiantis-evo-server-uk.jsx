import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-uk');
}

export default function TibiantisEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-uk" />;
}
