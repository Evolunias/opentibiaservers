import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-sweden');
}

export default function HighExpStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-sweden" />;
}
