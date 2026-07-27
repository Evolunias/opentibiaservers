import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-1-real-map-server');
}

export default function Empirebr81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-1-real-map-server" />;
}
