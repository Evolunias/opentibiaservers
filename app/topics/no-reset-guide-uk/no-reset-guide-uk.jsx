import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-uk');
}

export default function NoResetGuideUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-uk" />;
}
