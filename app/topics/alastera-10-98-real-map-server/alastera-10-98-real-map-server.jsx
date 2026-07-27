import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-real-map-server');
}

export default function Alastera1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-real-map-server" />;
}
