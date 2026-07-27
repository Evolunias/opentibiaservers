import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-latin-america');
}

export default function VenoreotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-latin-america" />;
}
