import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-usa');
}

export default function HighExpGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-usa" />;
}
