import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-4-real-map-servers');
}

export default function Thornia84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-4-real-map-servers" />;
}
