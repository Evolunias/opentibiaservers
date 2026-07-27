import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-poland');
}

export default function LowExpGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-poland" />;
}
