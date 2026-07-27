import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-real-map-server');
}

export default function Tibianus15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-real-map-server" />;
}
