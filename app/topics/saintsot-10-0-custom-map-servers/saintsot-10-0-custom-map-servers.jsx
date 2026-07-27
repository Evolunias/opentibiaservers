import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-custom-map-servers');
}

export default function Saintsot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-custom-map-servers" />;
}
