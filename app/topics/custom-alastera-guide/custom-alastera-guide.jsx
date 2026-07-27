import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-guide');
}

export default function CustomAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-guide" />;
}
