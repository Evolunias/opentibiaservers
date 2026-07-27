import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-luminera-guide');
}

export default function NoResetLumineraGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-luminera-guide" />;
}
