import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-germany');
}

export default function HighExpGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-germany" />;
}
