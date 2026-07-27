import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-custom-map-server');
}

export default function Saintsot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-custom-map-server" />;
}
