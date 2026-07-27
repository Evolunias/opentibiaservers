import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-custom-map-server');
}

export default function Demolidores12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-custom-map-server" />;
}
