import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-canada');
}

export default function VenoreotBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-canada" />;
}
