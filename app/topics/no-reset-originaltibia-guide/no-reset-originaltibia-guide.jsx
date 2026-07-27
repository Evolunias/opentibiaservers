import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-originaltibia-guide');
}

export default function NoResetOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-originaltibia-guide" />;
}
