import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-11-custom-map-servers');
}

export default function Nostalther11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-11-custom-map-servers" />;
}
