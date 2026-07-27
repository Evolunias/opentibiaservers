import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-real-map-servers');
}

export default function Thornia15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-real-map-servers" />;
}
