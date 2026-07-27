import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-cyntara-guide');
}

export default function HighrateCyntaraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-cyntara-guide" />;
}
