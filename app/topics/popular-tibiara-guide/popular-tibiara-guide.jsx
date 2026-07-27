import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-guide');
}

export default function PopularTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-guide" />;
}
