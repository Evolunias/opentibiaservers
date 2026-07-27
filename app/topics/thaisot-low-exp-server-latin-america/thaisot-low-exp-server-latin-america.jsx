import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-latin-america');
}

export default function ThaisotLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-latin-america" />;
}
