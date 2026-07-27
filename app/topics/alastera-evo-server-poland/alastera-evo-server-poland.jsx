import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-evo-server-poland');
}

export default function AlasteraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-evo-server-poland" />;
}
