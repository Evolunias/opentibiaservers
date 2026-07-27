import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-custom-map-servers');
}

export default function Saintsot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-custom-map-servers" />;
}
