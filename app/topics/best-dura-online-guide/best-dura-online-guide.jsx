import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dura-online-guide');
}

export default function BestDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="best-dura-online-guide" />;
}
