import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-1-real-map-server');
}

export default function Tibiantis81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-1-real-map-server" />;
}
