import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-real-map-server');
}

export default function Medivia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-real-map-server" />;
}
