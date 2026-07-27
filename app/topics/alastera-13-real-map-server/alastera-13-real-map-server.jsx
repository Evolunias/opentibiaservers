import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-real-map-server');
}

export default function Alastera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-real-map-server" />;
}
