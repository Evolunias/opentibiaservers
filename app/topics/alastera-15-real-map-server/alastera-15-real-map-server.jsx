import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-real-map-server');
}

export default function Alastera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-real-map-server" />;
}
