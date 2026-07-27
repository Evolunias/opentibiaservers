import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-france');
}

export default function MarolaotBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-france" />;
}
