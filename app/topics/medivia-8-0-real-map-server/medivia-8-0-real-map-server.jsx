import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-real-map-server');
}

export default function Medivia80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-real-map-server" />;
}
