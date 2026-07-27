import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-6-real-map-server');
}

export default function Alastera76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-6-real-map-server" />;
}
