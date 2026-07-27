import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-real-map-server');
}

export default function Tibianus84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-real-map-server" />;
}
