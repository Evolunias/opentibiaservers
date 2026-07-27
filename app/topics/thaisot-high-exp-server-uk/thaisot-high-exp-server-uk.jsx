import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-uk');
}

export default function ThaisotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-uk" />;
}
