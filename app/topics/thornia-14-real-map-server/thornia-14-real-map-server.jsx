import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-real-map-server');
}

export default function Thornia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-real-map-server" />;
}
