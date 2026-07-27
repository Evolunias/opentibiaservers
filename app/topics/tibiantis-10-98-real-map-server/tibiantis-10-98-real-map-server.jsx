import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-real-map-server');
}

export default function Tibiantis1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-real-map-server" />;
}
