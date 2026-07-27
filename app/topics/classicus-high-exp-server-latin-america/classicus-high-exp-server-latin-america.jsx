import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-latin-america');
}

export default function ClassicusHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-latin-america" />;
}
