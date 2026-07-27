import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-north-america');
}

export default function TibiascapeEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-north-america" />;
}
