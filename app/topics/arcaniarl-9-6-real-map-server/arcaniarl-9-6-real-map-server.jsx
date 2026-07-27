import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-9-6-real-map-server');
}

export default function Arcaniarl96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-9-6-real-map-server" />;
}
