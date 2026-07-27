import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-evo-servers-poland');
}

export default function CalmeraOtEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-evo-servers-poland" />;
}
