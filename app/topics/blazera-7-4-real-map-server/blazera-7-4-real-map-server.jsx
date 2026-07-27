import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-real-map-server');
}

export default function Blazera74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-real-map-server" />;
}
