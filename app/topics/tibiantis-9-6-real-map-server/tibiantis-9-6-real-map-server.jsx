import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-real-map-server');
}

export default function Tibiantis96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-real-map-server" />;
}
