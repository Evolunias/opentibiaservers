import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-north-america');
}

export default function RealMapServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-north-america" />;
}
