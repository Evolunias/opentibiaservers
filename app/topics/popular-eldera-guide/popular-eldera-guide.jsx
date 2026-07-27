import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-guide');
}

export default function PopularElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-guide" />;
}
