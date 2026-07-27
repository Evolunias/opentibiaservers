import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-servers-brazil');
}

export default function AlasteraEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-servers-brazil" />;
}
