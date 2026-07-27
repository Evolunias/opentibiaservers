import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-1-real-map-servers');
}

export default function Realera81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-8-1-real-map-servers" />;
}
