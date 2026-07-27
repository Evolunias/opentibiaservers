import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-real-map-server');
}

export default function Tibiantis12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-real-map-server" />;
}
