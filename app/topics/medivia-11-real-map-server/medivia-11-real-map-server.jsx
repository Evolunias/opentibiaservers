import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-real-map-server');
}

export default function Medivia11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-real-map-server" />;
}
