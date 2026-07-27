import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-guide-uk');
}

export default function LowExpGuideUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-guide-uk" />;
}
