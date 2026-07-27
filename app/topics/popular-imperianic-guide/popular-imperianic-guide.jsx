import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-guide');
}

export default function PopularImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-guide" />;
}
