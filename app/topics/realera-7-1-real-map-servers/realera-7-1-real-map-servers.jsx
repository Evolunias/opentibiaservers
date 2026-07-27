import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-1-real-map-servers');
}

export default function Realera71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-1-real-map-servers" />;
}
