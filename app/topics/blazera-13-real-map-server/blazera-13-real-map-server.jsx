import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-real-map-server');
}

export default function Blazera13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-real-map-server" />;
}
