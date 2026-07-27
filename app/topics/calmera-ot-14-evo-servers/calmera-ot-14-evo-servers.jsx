import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-14-evo-servers');
}

export default function CalmeraOt14EvoServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-14-evo-servers" />;
}
