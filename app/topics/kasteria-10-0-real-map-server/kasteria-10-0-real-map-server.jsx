import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-real-map-server');
}

export default function Kasteria100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-real-map-server" />;
}
