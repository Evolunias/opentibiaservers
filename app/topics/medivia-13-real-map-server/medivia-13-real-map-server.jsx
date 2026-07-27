import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-real-map-server');
}

export default function Medivia13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-real-map-server" />;
}
