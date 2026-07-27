import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-guide');
}

export default function PopularCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-guide" />;
}
