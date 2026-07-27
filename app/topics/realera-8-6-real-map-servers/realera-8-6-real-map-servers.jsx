import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-6-real-map-servers');
}

export default function Realera86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-8-6-real-map-servers" />;
}
