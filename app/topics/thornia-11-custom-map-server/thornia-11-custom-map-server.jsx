import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-custom-map-server');
}

export default function Thornia11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-custom-map-server" />;
}
