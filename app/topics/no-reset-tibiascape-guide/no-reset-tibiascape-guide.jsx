import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-guide');
}

export default function NoResetTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-guide" />;
}
