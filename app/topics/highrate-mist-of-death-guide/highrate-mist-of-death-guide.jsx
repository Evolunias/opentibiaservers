import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-guide');
}

export default function HighrateMistOfDeathGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-guide" />;
}
