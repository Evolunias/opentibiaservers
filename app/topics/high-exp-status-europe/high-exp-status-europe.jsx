import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-europe');
}

export default function HighExpStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-europe" />;
}
