import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-custom-map-server');
}

export default function Saintsot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-custom-map-server" />;
}
