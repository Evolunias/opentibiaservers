import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-real-map-server');
}

export default function Alastera100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-real-map-server" />;
}
