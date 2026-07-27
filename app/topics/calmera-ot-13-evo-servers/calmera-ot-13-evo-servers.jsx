import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-13-evo-servers');
}

export default function CalmeraOt13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-13-evo-servers" />;
}
