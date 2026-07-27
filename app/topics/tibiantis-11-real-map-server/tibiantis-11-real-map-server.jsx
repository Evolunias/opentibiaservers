import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-real-map-server');
}

export default function Tibiantis11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-real-map-server" />;
}
