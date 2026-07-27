import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-guide');
}

export default function FreshStartMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-guide" />;
}
