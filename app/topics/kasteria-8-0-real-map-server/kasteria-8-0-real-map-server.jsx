import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-real-map-server');
}

export default function Kasteria80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-real-map-server" />;
}
