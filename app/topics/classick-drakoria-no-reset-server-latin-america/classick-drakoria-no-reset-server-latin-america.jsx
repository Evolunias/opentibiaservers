import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-no-reset-server-latin-america');
}

export default function ClassickDrakoriaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-no-reset-server-latin-america" />;
}
