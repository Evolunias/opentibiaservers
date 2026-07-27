import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-argentina');
}

export default function HighExpStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-argentina" />;
}
