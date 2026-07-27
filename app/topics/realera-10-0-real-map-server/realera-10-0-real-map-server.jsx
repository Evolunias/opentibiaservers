import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-10-0-real-map-server');
}

export default function Realera100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-10-0-real-map-server" />;
}
