import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-argentina');
}

export default function RubinotBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-argentina" />;
}
