import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-real-map-server');
}

export default function Demolidores12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-real-map-server" />;
}
