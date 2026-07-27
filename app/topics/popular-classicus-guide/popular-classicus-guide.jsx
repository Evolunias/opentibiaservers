import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-guide');
}

export default function PopularClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-guide" />;
}
