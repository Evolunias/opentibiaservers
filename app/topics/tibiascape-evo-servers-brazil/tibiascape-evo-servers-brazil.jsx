import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-servers-brazil');
}

export default function TibiascapeEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-servers-brazil" />;
}
