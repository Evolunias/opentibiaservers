import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-germany');
}

export default function RealMapServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-germany" />;
}
