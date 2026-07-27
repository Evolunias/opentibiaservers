import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-real-map-server');
}

export default function Tibiantis15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-real-map-server" />;
}
