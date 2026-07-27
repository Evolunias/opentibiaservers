import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-brazil');
}

export default function PvpeStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-brazil" />;
}
