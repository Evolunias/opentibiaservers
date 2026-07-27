import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-real-map-server');
}

export default function Blazera80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-real-map-server" />;
}
