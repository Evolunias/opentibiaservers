import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-usa');
}

export default function NoResetGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-usa" />;
}
