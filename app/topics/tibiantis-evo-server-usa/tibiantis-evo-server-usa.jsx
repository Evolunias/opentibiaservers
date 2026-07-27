import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-usa');
}

export default function TibiantisEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-usa" />;
}
