import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-real-map-server');
}

export default function Blazera12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-real-map-server" />;
}
