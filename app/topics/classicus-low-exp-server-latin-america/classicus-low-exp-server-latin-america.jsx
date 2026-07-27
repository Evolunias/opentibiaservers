import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-low-exp-server-latin-america');
}

export default function ClassicusLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-low-exp-server-latin-america" />;
}
