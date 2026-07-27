import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-blazera-guide');
}

export default function FreshStartBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-blazera-guide" />;
}
