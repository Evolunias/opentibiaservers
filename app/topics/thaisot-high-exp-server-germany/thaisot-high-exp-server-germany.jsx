import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-germany');
}

export default function ThaisotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-germany" />;
}
