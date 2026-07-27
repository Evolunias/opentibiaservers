import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-custom-map-servers');
}

export default function Nostalther15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-custom-map-servers" />;
}
