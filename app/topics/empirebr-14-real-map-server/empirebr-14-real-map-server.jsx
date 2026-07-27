import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-14-real-map-server');
}

export default function Empirebr14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-14-real-map-server" />;
}
