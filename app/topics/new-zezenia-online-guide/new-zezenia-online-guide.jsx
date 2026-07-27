import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zezenia-online-guide');
}

export default function NewZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="new-zezenia-online-guide" />;
}
