import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-servers-usa');
}

export default function AlasteraEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-servers-usa" />;
}
