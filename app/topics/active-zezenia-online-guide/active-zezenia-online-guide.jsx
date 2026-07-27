import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zezenia-online-guide');
}

export default function ActiveZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="active-zezenia-online-guide" />;
}
