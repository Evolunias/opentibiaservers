import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-north-america');
}

export default function VenoreotBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-north-america" />;
}
