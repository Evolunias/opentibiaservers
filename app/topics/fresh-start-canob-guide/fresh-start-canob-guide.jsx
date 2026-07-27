import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-guide');
}

export default function FreshStartCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-guide" />;
}
