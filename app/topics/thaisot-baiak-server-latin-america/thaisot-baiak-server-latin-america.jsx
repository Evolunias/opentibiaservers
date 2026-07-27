import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-latin-america');
}

export default function ThaisotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-latin-america" />;
}
