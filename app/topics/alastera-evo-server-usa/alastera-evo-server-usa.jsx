import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-usa');
}

export default function AlasteraEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-usa" />;
}
