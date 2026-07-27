import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-real-map-server');
}

export default function Tibiantis13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-real-map-server" />;
}
