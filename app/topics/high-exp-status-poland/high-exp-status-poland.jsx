import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-poland');
}

export default function HighExpStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-poland" />;
}
