import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-custom-map-servers');
}

export default function Saintsot80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-custom-map-servers" />;
}
