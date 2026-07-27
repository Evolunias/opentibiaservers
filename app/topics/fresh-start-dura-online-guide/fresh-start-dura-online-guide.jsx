import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-dura-online-guide');
}

export default function FreshStartDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-dura-online-guide" />;
}
