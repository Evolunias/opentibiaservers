import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-brazil');
}

export default function RubinotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-brazil" />;
}
