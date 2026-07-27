import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-7-6-real-map-servers');
}

export default function Realera76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-7-6-real-map-servers" />;
}
