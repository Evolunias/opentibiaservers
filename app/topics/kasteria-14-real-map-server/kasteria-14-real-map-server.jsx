import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-real-map-server');
}

export default function Kasteria14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-real-map-server" />;
}
