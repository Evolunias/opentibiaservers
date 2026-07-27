import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-real-map-server');
}

export default function Kasteria96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-real-map-server" />;
}
