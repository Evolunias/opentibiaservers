import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-latin-america');
}

export default function ClassickDrakoriaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-latin-america" />;
}
