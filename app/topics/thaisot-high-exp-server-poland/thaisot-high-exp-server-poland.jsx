import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-poland');
}

export default function ThaisotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-poland" />;
}
