import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-brazil');
}

export default function VenoreotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-brazil" />;
}
