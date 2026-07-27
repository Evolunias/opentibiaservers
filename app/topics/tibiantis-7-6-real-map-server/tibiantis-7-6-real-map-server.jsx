import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-real-map-server');
}

export default function Tibiantis76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-real-map-server" />;
}
