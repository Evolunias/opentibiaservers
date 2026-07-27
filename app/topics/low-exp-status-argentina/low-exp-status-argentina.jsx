import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-argentina');
}

export default function LowExpStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-argentina" />;
}
