import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-low-exp-server-brazil');
}

export default function ThaisotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-low-exp-server-brazil" />;
}
