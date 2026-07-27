import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-guide');
}

export default function TopRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-realera-guide" />;
}
