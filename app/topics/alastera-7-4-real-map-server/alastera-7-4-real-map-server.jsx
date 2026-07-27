import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-real-map-server');
}

export default function Alastera74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-real-map-server" />;
}
