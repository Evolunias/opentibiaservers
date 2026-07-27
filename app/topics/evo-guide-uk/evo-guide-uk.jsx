import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-guide-uk');
}

export default function EvoGuideUkKeywordPage() {
  return <StaticKeywordPage slug="evo-guide-uk" />;
}
