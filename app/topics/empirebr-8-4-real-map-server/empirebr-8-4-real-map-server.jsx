import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-real-map-server');
}

export default function Empirebr84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-real-map-server" />;
}
