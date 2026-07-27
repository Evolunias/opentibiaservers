import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-9-6-custom-map-servers');
}

export default function Nostalther96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-9-6-custom-map-servers" />;
}
