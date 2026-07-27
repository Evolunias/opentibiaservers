import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-guide');
}

export default function PopularOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-guide" />;
}
