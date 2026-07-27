import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-guide');
}

export default function NewAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-guide" />;
}
