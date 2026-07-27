import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-canada');
}

export default function HighExpStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-canada" />;
}
