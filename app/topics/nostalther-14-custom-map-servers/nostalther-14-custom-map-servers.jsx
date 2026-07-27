import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-14-custom-map-servers');
}

export default function Nostalther14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-14-custom-map-servers" />;
}
