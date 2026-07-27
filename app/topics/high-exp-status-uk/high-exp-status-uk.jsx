import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-uk');
}

export default function HighExpStatusUkKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-uk" />;
}
