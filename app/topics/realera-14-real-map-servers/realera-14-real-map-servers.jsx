import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-real-map-servers');
}

export default function Realera14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-14-real-map-servers" />;
}
