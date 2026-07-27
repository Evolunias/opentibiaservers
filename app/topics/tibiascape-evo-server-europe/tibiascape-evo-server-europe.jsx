import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-europe');
}

export default function TibiascapeEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-europe" />;
}
