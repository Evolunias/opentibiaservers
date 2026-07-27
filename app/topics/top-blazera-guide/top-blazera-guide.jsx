import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-guide');
}

export default function TopBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-guide" />;
}
