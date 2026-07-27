import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-12-custom-map-servers');
}

export default function Demolidores12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-12-custom-map-servers" />;
}
