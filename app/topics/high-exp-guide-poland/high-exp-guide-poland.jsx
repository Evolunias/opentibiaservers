import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-poland');
}

export default function HighExpGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-poland" />;
}
