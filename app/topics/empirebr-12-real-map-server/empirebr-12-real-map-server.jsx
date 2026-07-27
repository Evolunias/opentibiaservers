import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-12-real-map-server');
}

export default function Empirebr12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-12-real-map-server" />;
}
