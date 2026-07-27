import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-guide');
}

export default function FreshStartUnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-guide" />;
}
