import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-custom-map-server');
}

export default function Thornia15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-custom-map-server" />;
}
