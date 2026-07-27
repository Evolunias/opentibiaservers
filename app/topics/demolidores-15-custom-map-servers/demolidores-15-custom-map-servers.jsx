import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-15-custom-map-servers');
}

export default function Demolidores15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-15-custom-map-servers" />;
}
