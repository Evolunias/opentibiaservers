import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-real-map-server');
}

export default function Alastera81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-real-map-server" />;
}
