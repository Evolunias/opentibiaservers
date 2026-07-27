import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-guide');
}

export default function TopClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-guide" />;
}
