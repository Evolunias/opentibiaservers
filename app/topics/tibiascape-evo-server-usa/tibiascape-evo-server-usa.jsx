import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-usa');
}

export default function TibiascapeEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-usa" />;
}
