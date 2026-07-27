import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-guide');
}

export default function PopularBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-guide" />;
}
