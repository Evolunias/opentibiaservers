import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-canada');
}

export default function HighExpGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-canada" />;
}
