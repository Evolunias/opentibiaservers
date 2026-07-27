import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-11-real-map-server');
}

export default function Empirebr11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-11-real-map-server" />;
}
