import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-guide');
}

export default function AlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="alastera-guide" />;
}
