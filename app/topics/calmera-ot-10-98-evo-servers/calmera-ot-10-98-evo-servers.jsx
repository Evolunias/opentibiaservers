import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-98-evo-servers');
}

export default function CalmeraOt1098EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-98-evo-servers" />;
}
