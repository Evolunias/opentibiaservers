import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-uk');
}

export default function LowExpStatusUkKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-uk" />;
}
