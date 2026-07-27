import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-baiak-server-latin-america');
}

export default function MidhemBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-baiak-server-latin-america" />;
}
