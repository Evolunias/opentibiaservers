import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-real-map-server');
}

export default function Alastera96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-real-map-server" />;
}
