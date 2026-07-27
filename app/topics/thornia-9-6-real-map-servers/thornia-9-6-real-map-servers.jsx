import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-real-map-servers');
}

export default function Thornia96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-real-map-servers" />;
}
