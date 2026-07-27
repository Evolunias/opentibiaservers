import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-mist-of-death-guide');
}

export default function BestMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="best-mist-of-death-guide" />;
}
