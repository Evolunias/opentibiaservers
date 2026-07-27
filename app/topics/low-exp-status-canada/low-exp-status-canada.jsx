import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-canada');
}

export default function LowExpStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-canada" />;
}
