import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-custom-map-server');
}

export default function Thornia13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-custom-map-server" />;
}
