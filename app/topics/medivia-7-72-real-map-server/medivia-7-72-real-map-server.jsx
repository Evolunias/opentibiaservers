import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-real-map-server');
}

export default function Medivia772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-real-map-server" />;
}
