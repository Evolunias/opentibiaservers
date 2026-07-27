import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-mist-of-death-guide');
}

export default function FreshStartMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-mist-of-death-guide" />;
}
