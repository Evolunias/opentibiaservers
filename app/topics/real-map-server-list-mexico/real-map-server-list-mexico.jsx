import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-server-list-mexico');
}

export default function RealMapServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-server-list-mexico" />;
}
