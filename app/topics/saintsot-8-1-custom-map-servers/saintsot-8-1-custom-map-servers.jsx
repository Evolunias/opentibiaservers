import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-custom-map-servers');
}

export default function Saintsot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-custom-map-servers" />;
}
