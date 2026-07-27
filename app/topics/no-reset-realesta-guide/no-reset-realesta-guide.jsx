import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-guide');
}

export default function NoResetRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-guide" />;
}
