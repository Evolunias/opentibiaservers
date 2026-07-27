import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-guide-uk');
}

export default function HighExpGuideUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-guide-uk" />;
}
