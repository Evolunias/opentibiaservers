import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-germany');
}

export default function LowExpStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-germany" />;
}
