import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-guide');
}

export default function LowrateZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-guide" />;
}
