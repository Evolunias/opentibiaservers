import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-1-custom-map-server');
}

export default function Saintsot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-1-custom-map-server" />;
}
