import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-usa');
}

export default function HighExpStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-usa" />;
}
