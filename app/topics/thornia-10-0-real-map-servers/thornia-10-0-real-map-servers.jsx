import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-0-real-map-servers');
}

export default function Thornia100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-0-real-map-servers" />;
}
