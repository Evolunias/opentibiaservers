import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-south-america');
}

export default function LowExpStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-south-america" />;
}
