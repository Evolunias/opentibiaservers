import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-germany');
}

export default function NoResetGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-germany" />;
}
