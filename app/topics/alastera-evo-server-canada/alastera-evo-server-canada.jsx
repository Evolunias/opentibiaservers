import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-canada');
}

export default function AlasteraEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-canada" />;
}
