import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-guide');
}

export default function FreshStartTibijkaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-guide" />;
}
