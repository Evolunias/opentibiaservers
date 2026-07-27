import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-argentina');
}

export default function AlasteraEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-argentina" />;
}
