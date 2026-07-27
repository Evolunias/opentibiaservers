import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-6-real-map-server');
}

export default function Empirebr86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-6-real-map-server" />;
}
