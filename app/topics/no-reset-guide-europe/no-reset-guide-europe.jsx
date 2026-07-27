import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-guide-europe');
}

export default function NoResetGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-guide-europe" />;
}
