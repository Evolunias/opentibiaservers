import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dura-online-guide');
}

export default function CurrentDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="current-dura-online-guide" />;
}
