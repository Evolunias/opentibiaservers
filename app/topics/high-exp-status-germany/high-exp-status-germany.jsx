import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-germany');
}

export default function HighExpStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-germany" />;
}
