import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-real-map-server');
}

export default function Blazera86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-real-map-server" />;
}
