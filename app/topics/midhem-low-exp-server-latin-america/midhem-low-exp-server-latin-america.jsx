import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-low-exp-server-latin-america');
}

export default function MidhemLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-low-exp-server-latin-america" />;
}
