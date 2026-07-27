import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-guide');
}

export default function HighrateMidhemGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-guide" />;
}
