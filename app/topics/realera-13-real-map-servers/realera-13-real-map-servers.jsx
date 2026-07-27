import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-13-real-map-servers');
}

export default function Realera13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-13-real-map-servers" />;
}
