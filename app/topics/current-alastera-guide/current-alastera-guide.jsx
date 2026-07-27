import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-alastera-guide');
}

export default function CurrentAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="current-alastera-guide" />;
}
