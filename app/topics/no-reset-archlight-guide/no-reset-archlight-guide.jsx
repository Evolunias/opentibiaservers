import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-guide');
}

export default function NoResetArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-guide" />;
}
