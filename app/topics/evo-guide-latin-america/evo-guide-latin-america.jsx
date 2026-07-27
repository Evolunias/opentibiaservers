import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-latin-america');
}

export default function EvoGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-latin-america" />;
}
