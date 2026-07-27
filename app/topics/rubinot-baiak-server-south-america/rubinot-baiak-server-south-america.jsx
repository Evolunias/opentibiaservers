import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-south-america');
}

export default function RubinotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-south-america" />;
}
