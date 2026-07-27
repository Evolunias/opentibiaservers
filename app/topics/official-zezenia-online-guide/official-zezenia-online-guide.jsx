import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zezenia-online-guide');
}

export default function OfficialZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="official-zezenia-online-guide" />;
}
