import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-72-real-map-server');
}

export default function Tibiantis772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-72-real-map-server" />;
}
