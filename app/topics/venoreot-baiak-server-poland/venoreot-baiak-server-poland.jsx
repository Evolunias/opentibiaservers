import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-poland');
}

export default function VenoreotBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-poland" />;
}
