import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-custom-map-server');
}

export default function Demolidores13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-custom-map-server" />;
}
