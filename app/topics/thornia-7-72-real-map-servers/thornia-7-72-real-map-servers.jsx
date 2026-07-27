import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-real-map-servers');
}

export default function Thornia772RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-real-map-servers" />;
}
