import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-poland');
}

export default function RubinotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-poland" />;
}
