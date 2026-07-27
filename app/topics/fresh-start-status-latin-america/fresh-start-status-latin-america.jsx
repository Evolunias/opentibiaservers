import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-status-latin-america');
}

export default function FreshStartStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-status-latin-america" />;
}
