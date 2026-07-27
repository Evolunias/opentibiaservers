import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-poland');
}

export default function LowExpStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-poland" />;
}
