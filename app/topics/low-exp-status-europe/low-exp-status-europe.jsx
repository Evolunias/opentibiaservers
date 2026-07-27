import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-europe');
}

export default function LowExpStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-europe" />;
}
