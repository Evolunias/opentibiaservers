import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-canada');
}

export default function LowExpGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-canada" />;
}
