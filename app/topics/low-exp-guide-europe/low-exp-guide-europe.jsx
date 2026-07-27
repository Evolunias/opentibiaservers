import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-europe');
}

export default function LowExpGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-europe" />;
}
