import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-real-map-server');
}

export default function Medivia84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-real-map-server" />;
}
