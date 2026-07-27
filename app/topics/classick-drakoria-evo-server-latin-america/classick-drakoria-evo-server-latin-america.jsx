import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-latin-america');
}

export default function ClassickDrakoriaEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-latin-america" />;
}
