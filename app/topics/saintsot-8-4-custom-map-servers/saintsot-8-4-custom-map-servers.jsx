import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-custom-map-servers');
}

export default function Saintsot84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-custom-map-servers" />;
}
