import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-europe');
}

export default function VenoreotBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-europe" />;
}
