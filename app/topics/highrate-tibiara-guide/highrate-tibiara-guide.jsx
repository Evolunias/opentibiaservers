import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-guide');
}

export default function HighrateTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-guide" />;
}
