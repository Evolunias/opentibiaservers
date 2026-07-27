import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zezenia-online-guide');
}

export default function HighrateZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-zezenia-online-guide" />;
}
