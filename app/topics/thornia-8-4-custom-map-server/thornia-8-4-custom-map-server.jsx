import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-custom-map-server');
}

export default function Thornia84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-custom-map-server" />;
}
