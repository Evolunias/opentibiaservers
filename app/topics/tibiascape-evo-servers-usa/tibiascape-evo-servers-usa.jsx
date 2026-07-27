import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-servers-usa');
}

export default function TibiascapeEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-servers-usa" />;
}
