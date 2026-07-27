import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-real-map-server');
}

export default function Realesta100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-real-map-server" />;
}
