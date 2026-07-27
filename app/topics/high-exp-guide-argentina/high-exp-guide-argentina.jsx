import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-argentina');
}

export default function HighExpGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-argentina" />;
}
