import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-real-map-server');
}

export default function Kasteria86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-real-map-server" />;
}
