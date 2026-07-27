import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-evo-server-mexico');
}

export default function TibiantisEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-evo-server-mexico" />;
}
