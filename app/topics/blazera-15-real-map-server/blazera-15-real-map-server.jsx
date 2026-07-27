import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-real-map-server');
}

export default function Blazera15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-real-map-server" />;
}
