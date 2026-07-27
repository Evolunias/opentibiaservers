import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-guide');
}

export default function FreshStartRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-guide" />;
}
