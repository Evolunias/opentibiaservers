import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-sweden');
}

export default function LowExpStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-sweden" />;
}
