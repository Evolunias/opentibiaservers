import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-mexico');
}

export default function VenoreotBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-mexico" />;
}
