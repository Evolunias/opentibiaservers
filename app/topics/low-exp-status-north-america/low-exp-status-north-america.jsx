import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-north-america');
}

export default function LowExpStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-north-america" />;
}
