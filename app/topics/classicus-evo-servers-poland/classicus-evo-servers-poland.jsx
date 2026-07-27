import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-servers-poland');
}

export default function ClassicusEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-servers-poland" />;
}
