import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-6-real-map-server');
}

export default function Empirebr76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-6-real-map-server" />;
}
