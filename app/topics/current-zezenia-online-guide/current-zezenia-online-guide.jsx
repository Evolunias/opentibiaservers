import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zezenia-online-guide');
}

export default function CurrentZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="current-zezenia-online-guide" />;
}
