import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-4-custom-map-server');
}

export default function Thornia74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-4-custom-map-server" />;
}
