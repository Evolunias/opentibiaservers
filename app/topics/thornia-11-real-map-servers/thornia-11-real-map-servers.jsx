import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-11-real-map-servers');
}

export default function Thornia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-11-real-map-servers" />;
}
