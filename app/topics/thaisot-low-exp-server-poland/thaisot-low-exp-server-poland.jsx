import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-poland');
}

export default function ThaisotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-poland" />;
}
