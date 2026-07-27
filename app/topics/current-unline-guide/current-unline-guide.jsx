import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-guide');
}

export default function CurrentUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="current-unline-guide" />;
}
