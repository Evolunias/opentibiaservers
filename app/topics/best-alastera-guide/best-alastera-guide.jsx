import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-alastera-guide');
}

export default function BestAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="best-alastera-guide" />;
}
