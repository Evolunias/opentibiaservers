import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online-guide');
}

export default function PopularDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online-guide" />;
}
