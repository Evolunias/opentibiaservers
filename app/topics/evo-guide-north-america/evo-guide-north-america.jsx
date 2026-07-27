import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-north-america');
}

export default function EvoGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-north-america" />;
}
