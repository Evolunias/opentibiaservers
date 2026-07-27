import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-guide');
}

export default function TopAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-guide" />;
}
