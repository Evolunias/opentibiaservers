import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classicus-guide');
}

export default function FreshStartClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classicus-guide" />;
}
