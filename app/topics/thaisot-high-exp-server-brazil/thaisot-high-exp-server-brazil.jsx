import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-high-exp-server-brazil');
}

export default function ThaisotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-high-exp-server-brazil" />;
}
