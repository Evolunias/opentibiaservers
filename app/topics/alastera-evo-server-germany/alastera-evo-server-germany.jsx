import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-germany');
}

export default function AlasteraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-germany" />;
}
