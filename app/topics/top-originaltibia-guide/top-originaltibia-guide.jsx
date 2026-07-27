import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-guide');
}

export default function TopOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-guide" />;
}
