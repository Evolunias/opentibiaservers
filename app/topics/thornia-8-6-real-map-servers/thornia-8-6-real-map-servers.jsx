import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-6-real-map-servers');
}

export default function Thornia86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-6-real-map-servers" />;
}
