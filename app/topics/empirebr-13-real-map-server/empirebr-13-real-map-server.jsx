import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-real-map-server');
}

export default function Empirebr13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-real-map-server" />;
}
