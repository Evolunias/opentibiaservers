import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-fresh-start-server-latin-america');
}

export default function ThaisotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-fresh-start-server-latin-america" />;
}
