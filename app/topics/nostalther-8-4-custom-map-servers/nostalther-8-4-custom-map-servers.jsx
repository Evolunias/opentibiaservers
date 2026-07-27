import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-4-custom-map-servers');
}

export default function Nostalther84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-4-custom-map-servers" />;
}
