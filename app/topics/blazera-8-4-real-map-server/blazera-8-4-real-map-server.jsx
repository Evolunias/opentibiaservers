import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-real-map-server');
}

export default function Blazera84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-real-map-server" />;
}
