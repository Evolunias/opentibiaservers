import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-germany');
}

export default function VenoreotBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-germany" />;
}
