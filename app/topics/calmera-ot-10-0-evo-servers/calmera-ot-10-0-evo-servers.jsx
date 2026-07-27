import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-10-0-evo-servers');
}

export default function CalmeraOt100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-10-0-evo-servers" />;
}
