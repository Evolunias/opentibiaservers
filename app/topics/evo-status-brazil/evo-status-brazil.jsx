import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-brazil');
}

export default function EvoStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-status-brazil" />;
}
