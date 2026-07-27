import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-8-0-real-map-server');
}

export default function Realera80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-8-0-real-map-server" />;
}
