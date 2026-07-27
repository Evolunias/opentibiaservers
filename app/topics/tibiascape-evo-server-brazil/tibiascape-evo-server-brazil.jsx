import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-brazil');
}

export default function TibiascapeEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-brazil" />;
}
