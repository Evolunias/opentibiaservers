import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-8-0-custom-map-server');
}

export default function Demolidores80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-8-0-custom-map-server" />;
}
