import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-0-real-map-server');
}

export default function Tibiantis100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-0-real-map-server" />;
}
