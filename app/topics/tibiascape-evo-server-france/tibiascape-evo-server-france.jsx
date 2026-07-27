import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-france');
}

export default function TibiascapeEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-france" />;
}
