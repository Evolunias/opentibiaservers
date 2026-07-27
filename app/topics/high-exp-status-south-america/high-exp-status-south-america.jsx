import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-south-america');
}

export default function HighExpStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-south-america" />;
}
