import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-latin-america');
}

export default function AlasteraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-latin-america" />;
}
