import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-germany');
}

export default function ClassicusEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-germany" />;
}
