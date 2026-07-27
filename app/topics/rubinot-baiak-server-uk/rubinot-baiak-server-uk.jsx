import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-uk');
}

export default function RubinotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-uk" />;
}
