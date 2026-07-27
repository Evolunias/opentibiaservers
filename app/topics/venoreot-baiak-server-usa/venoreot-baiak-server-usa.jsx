import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-usa');
}

export default function VenoreotBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-usa" />;
}
