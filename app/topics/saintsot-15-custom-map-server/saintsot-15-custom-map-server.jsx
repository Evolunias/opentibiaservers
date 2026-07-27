import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-custom-map-server');
}

export default function Saintsot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-custom-map-server" />;
}
