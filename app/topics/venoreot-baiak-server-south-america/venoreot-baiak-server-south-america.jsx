import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-baiak-server-south-america');
}

export default function VenoreotBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-baiak-server-south-america" />;
}
