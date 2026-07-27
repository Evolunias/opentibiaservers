import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-0-real-map-server');
}

export default function Medivia100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-0-real-map-server" />;
}
