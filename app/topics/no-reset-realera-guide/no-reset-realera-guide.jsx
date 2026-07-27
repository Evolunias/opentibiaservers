import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-guide');
}

export default function NoResetRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-guide" />;
}
