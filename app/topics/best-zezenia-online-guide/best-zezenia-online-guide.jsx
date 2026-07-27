import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zezenia-online-guide');
}

export default function BestZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="best-zezenia-online-guide" />;
}
