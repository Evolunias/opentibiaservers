import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-latin-america');
}

export default function ClassicusBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-latin-america" />;
}
