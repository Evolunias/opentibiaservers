import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-guide');
}

export default function NoResetDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-guide" />;
}
