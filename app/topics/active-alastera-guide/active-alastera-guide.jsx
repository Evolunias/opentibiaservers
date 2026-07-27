import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-alastera-guide');
}

export default function ActiveAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="active-alastera-guide" />;
}
