import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-high-exp-server-latin-america');
}

export default function MidhemHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-high-exp-server-latin-america" />;
}
