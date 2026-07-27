import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-baiak-server-latin-america');
}

export default function RubinotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-baiak-server-latin-america" />;
}
