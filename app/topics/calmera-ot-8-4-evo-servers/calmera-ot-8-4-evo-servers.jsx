import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-evo-servers');
}

export default function CalmeraOt84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-evo-servers" />;
}
