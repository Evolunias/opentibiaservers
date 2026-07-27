import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-real-map-server');
}

export default function Alastera854RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-real-map-server" />;
}
