import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-real-map-server');
}

export default function Blazera11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-real-map-server" />;
}
