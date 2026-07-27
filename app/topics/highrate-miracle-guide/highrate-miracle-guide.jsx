import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-guide');
}

export default function HighrateMiracleGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-guide" />;
}
