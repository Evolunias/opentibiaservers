import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-europe');
}

export default function TibiantisEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-europe" />;
}
