import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-brazil');
}

export default function HighExpStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-brazil" />;
}
