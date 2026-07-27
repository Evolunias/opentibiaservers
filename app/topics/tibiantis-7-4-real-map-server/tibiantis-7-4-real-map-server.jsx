import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-real-map-server');
}

export default function Tibiantis74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-real-map-server" />;
}
