import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zezenia-online-guide');
}

export default function FreshStartZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zezenia-online-guide" />;
}
