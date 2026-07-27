import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-servers-brazil');
}

export default function ClassicusEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-servers-brazil" />;
}
