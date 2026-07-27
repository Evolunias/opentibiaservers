import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-dura-online-guide');
}

export default function TopDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="top-dura-online-guide" />;
}
