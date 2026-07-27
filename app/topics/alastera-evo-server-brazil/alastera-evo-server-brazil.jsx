import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-brazil');
}

export default function AlasteraEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-brazil" />;
}
