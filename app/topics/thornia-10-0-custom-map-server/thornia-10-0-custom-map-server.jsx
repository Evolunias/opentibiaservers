import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-custom-map-server');
}

export default function Thornia100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-custom-map-server" />;
}
