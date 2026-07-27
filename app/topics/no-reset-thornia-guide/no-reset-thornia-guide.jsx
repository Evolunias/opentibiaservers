import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-guide');
}

export default function NoResetThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-guide" />;
}
