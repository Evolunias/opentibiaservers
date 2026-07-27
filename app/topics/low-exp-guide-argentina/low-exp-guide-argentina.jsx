import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-argentina');
}

export default function LowExpGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-argentina" />;
}
