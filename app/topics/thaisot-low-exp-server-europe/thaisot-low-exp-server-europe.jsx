import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-europe');
}

export default function ThaisotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-europe" />;
}
