import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-guide');
}

export default function FreshStartAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-guide" />;
}
