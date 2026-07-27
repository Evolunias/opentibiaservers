import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-north-america');
}

export default function LowExpGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-north-america" />;
}
