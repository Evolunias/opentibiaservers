import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-1-real-map-server');
}

export default function Blazera81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-1-real-map-server" />;
}
