import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-south-america');
}

export default function RealMapServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-south-america" />;
}
