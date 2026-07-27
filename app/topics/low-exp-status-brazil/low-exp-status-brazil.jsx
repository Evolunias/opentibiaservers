import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-brazil');
}

export default function LowExpStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-brazil" />;
}
