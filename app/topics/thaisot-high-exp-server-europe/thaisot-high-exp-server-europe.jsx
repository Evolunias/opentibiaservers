import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-europe');
}

export default function ThaisotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-europe" />;
}
