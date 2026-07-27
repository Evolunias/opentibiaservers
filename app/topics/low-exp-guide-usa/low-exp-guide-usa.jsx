import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-usa');
}

export default function LowExpGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-usa" />;
}
