import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-guide');
}

export default function TopRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-guide" />;
}
