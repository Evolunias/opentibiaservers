import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-baiak-server-north-america');
}

export default function MarolaotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-baiak-server-north-america" />;
}
