import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-no-reset-server-latin-america');
}

export default function ClassicusNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-no-reset-server-latin-america" />;
}
