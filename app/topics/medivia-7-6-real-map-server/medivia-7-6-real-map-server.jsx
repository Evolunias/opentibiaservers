import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-real-map-server');
}

export default function Medivia76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-real-map-server" />;
}
