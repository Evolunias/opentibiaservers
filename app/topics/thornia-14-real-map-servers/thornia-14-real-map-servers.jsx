import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-real-map-servers');
}

export default function Thornia14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-real-map-servers" />;
}
