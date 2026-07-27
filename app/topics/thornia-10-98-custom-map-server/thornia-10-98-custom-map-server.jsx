import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-custom-map-server');
}

export default function Thornia1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-custom-map-server" />;
}
