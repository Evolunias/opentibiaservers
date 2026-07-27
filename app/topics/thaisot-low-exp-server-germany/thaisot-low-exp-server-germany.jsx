import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-germany');
}

export default function ThaisotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-germany" />;
}
