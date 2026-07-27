import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-brazil');
}

export default function ClassicusEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-brazil" />;
}
