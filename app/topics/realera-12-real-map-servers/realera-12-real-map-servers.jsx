import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-12-real-map-servers');
}

export default function Realera12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="realera-12-real-map-servers" />;
}
