import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-europe');
}

export default function AlasteraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-europe" />;
}
