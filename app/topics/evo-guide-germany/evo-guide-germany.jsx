import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-germany');
}

export default function EvoGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-germany" />;
}
