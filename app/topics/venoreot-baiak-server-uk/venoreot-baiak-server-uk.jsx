import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-uk');
}

export default function VenoreotBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-uk" />;
}
