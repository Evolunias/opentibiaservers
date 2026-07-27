import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-14-real-map-server');
}

export default function Realera14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realera-14-real-map-server" />;
}
