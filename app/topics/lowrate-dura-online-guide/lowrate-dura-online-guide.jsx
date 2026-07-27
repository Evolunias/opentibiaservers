import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dura-online-guide');
}

export default function LowrateDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dura-online-guide" />;
}
