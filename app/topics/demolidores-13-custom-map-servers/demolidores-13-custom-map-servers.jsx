import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-13-custom-map-servers');
}

export default function Demolidores13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-13-custom-map-servers" />;
}
