import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-9-6-custom-map-server');
}

export default function Saintsot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-9-6-custom-map-server" />;
}
