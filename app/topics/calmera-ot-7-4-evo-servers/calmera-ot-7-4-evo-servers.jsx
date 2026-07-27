import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-7-4-evo-servers');
}

export default function CalmeraOt74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-7-4-evo-servers" />;
}
