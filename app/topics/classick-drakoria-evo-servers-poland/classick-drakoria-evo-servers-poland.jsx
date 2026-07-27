import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-servers-poland');
}

export default function ClassickDrakoriaEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-servers-poland" />;
}
