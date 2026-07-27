import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-north-america');
}

export default function HighExpGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-north-america" />;
}
