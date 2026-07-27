import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-real-map-server');
}

export default function Alastera14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-real-map-server" />;
}
