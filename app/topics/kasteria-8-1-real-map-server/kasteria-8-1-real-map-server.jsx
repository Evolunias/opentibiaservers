import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-1-real-map-server');
}

export default function Kasteria81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-1-real-map-server" />;
}
