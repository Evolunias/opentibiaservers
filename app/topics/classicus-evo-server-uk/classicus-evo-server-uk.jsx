import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-uk');
}

export default function ClassicusEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-uk" />;
}
