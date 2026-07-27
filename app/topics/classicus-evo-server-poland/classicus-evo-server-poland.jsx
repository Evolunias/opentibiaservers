import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-poland');
}

export default function ClassicusEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-poland" />;
}
