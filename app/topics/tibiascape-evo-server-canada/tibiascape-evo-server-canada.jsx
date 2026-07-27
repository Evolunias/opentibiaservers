import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-canada');
}

export default function TibiascapeEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-canada" />;
}
