import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zezenia-online-guide');
}

export default function NoResetZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zezenia-online-guide" />;
}
