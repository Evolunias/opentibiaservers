import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-7-1-custom-map-server');
}

export default function Saintsot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-7-1-custom-map-server" />;
}
