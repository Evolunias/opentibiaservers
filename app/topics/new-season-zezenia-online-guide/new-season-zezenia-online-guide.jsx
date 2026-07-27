import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zezenia-online-guide');
}

export default function NewSeasonZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-zezenia-online-guide" />;
}
