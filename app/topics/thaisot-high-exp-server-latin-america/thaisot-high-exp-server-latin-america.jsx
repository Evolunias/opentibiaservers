import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-latin-america');
}

export default function ThaisotHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-latin-america" />;
}
