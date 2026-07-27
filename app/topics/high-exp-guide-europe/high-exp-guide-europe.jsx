import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-europe');
}

export default function HighExpGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-europe" />;
}
