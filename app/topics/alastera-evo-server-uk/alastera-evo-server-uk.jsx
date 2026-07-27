import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-uk');
}

export default function AlasteraEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-uk" />;
}
