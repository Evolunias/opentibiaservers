import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-real-map-server');
}

export default function AureraGlobal14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-real-map-server" />;
}
