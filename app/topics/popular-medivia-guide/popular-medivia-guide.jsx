import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-medivia-guide');
}

export default function PopularMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-medivia-guide" />;
}
