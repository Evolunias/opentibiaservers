import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-real-map-server');
}

export default function Alastera71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-real-map-server" />;
}
