import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-brazil');
}

export default function ThaisotPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-brazil" />;
}
