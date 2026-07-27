import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-baiak-server-brazil');
}

export default function ThaisotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thaisot-baiak-server-brazil" />;
}
