import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-13-custom-map-server');
}

export default function Saintsot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-13-custom-map-server" />;
}
