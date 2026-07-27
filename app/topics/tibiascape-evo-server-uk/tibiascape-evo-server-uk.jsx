import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-uk');
}

export default function TibiascapeEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-uk" />;
}
