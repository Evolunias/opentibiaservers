import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-guide');
}

export default function FreshStartRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-guide" />;
}
