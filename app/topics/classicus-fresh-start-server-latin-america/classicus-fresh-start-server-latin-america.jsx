import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-fresh-start-server-latin-america');
}

export default function ClassicusFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-fresh-start-server-latin-america" />;
}
