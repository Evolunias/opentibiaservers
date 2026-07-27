import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-mexico');
}

export default function AlasteraEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-mexico" />;
}
