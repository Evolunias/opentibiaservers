import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-guide');
}

export default function TopUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="top-unline-guide" />;
}
