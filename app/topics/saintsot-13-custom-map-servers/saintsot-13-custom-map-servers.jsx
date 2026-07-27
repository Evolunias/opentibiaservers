import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-custom-map-servers');
}

export default function Saintsot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-custom-map-servers" />;
}
