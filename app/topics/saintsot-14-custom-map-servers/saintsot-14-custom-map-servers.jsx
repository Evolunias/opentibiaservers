import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-custom-map-servers');
}

export default function Saintsot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-custom-map-servers" />;
}
