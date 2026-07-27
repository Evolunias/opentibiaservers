import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-usa');
}

export default function LowExpStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-usa" />;
}
