import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-10-0-custom-map-servers');
}

export default function Nostalther100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-10-0-custom-map-servers" />;
}
