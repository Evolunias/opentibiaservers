import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-1-custom-map-server');
}

export default function Thornia81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-1-custom-map-server" />;
}
