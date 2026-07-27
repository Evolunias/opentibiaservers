import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-latin-america');
}

export default function LowExpGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-latin-america" />;
}
