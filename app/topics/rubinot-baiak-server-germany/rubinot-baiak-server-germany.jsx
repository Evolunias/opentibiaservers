import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-germany');
}

export default function RubinotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-germany" />;
}
