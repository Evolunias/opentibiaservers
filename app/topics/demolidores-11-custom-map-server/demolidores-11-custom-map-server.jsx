import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-11-custom-map-server');
}

export default function Demolidores11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-11-custom-map-server" />;
}
