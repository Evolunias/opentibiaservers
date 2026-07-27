import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-guide');
}

export default function NoResetElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-guide" />;
}
