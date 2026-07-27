import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-9-6-real-map-servers');
}

export default function Realera96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-9-6-real-map-servers" />;
}
