import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-france');
}

export default function RubinotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-france" />;
}
