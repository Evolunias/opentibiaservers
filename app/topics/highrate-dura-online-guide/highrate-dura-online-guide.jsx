import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-dura-online-guide');
}

export default function HighrateDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-dura-online-guide" />;
}
