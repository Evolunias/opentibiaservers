import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-germany');
}

export default function LowExpGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-germany" />;
}
