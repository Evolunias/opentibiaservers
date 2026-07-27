import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-real-map-server');
}

export default function Medivia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-real-map-server" />;
}
