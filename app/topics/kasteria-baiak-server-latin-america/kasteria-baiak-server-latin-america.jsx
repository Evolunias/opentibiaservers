import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-baiak-server-latin-america');
}

export default function KasteriaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-baiak-server-latin-america" />;
}
