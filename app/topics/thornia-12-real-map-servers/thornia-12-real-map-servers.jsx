import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-12-real-map-servers');
}

export default function Thornia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-12-real-map-servers" />;
}
