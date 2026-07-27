import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-real-map-server');
}

export default function Alastera772RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-real-map-server" />;
}
