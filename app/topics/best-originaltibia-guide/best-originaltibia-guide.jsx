import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-guide');
}

export default function BestOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-guide" />;
}
