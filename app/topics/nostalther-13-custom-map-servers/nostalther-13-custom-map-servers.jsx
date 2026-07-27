import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-13-custom-map-servers');
}

export default function Nostalther13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-13-custom-map-servers" />;
}
