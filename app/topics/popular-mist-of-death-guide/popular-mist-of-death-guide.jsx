import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-mist-of-death-guide');
}

export default function PopularMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-mist-of-death-guide" />;
}
