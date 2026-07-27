import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zezenia-online-guide');
}

export default function TopZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="top-zezenia-online-guide" />;
}
