import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-real-map-server');
}

export default function Blazera96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-real-map-server" />;
}
