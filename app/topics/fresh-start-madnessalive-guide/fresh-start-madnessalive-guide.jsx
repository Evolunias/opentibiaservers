import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-madnessalive-guide');
}

export default function FreshStartMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-madnessalive-guide" />;
}
