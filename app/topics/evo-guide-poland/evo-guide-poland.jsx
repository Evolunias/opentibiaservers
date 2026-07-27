import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-poland');
}

export default function EvoGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-poland" />;
}
