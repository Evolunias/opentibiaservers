import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-guide');
}

export default function NoResetTibiaraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-guide" />;
}
