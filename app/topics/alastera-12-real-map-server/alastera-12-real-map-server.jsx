import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-12-real-map-server');
}

export default function Alastera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-12-real-map-server" />;
}
