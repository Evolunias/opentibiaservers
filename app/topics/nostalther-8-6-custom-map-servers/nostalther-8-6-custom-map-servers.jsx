import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-8-6-custom-map-servers');
}

export default function Nostalther86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-8-6-custom-map-servers" />;
}
