import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-evo-server-latin-america');
}

export default function ClassicusEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-evo-server-latin-america" />;
}
