import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-1-custom-map-servers');
}

export default function Nostalther81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-1-custom-map-servers" />;
}
