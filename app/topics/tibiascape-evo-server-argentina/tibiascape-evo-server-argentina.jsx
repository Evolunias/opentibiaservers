import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-argentina');
}

export default function TibiascapeEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-argentina" />;
}
