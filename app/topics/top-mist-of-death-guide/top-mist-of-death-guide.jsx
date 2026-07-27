import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-mist-of-death-guide');
}

export default function TopMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="top-mist-of-death-guide" />;
}
