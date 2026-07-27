import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-poland');
}

export default function NoResetGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-poland" />;
}
