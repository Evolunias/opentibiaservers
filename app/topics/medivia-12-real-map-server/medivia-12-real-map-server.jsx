import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-real-map-server');
}

export default function Medivia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-real-map-server" />;
}
