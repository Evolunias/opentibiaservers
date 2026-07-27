import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-latin-america');
}

export default function HighExpGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-latin-america" />;
}
