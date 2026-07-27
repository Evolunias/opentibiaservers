import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-guide');
}

export default function CurrentOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-guide" />;
}
