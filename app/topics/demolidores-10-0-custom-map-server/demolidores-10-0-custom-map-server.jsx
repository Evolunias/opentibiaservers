import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-10-0-custom-map-server');
}

export default function Demolidores100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-10-0-custom-map-server" />;
}
