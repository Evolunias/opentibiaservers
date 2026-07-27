import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-north-america');
}

export default function HighExpStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-north-america" />;
}
