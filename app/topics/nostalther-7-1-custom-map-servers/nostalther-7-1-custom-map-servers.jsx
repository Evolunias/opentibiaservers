import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-7-1-custom-map-servers');
}

export default function Nostalther71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-7-1-custom-map-servers" />;
}
